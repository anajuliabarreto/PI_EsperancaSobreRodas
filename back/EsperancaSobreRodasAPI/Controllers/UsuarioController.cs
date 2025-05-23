﻿
using EsperancaSobreRodasAPI.DTO;
using EsperancaSobreRodasAPI.Models;
using EsperancaSobreRodasAPI.Repositories.Interface;
using EsperancaSobreRodasAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EsperancaSobreRodasAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        private readonly IUsuarioRepository _usuarioRepository;

        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<UsuarioModel>>> BuscarTodosUsuarios()
        {
            List<UsuarioModel> usuarios = await _usuarioRepository.BuscarTodosUsuarios();
            return Ok(usuarios);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UsuarioModel>> BuscarPorId([FromRoute] int id)
        {
            UsuarioModel usuario = await _usuarioRepository.BuscarPorId(id);
            return Ok(usuario);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<UsuarioModel>> Cadastrar([FromBody] CriarUsuarioDTO criarUsuarioDTO)
        {
            UsuarioModel usuario = await _usuarioRepository.Cadastrar(criarUsuarioDTO.toModel());
            
            return Ok(usuario);
        }                

        [AllowAnonymous]
        [HttpGet("token")]
        public async Task<ActionResult<UsuarioComToken>> BuscarToken([FromQuery] string emailUsuario, [FromQuery] string senhaUsuario)
        {            
            var usuario = await _usuarioRepository.BuscarPorEmail(emailUsuario);

            if (usuario == null)
            {
                return NotFound(new { mensagem = "Usuário não encontrado" });
            }

            if (usuario.SenhaUsuario != senhaUsuario)
            {
                return Unauthorized(new { mensagem = "Nome de usuário ou senha incorretos" });
            }

            var token = TokenService.GenerateToken(usuario);
            
            var resposta = new UsuarioComToken
            {
                Usuario = usuario,
                Token = token
            };

            return Ok(resposta);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<UsuarioModel>> Atualizar([FromBody] CriarUsuarioDTO usuarioModel, int id)
        {
            UsuarioModel usuario = await _usuarioRepository.BuscarPorId(id);
            
            if (usuario == null)
            {
                return NotFound(new { mensagem = "Usuário não foi encontrado" });
            }
            
            usuario.NomePaciente = usuarioModel.NomePaciente ?? usuario.NomePaciente;
            usuario.EmailUsuario = usuarioModel.EmailUsuario ?? usuario.EmailUsuario;
            usuario.SenhaUsuario = usuarioModel.SenhaUsuario ?? usuario.SenhaUsuario;
            
            usuario = await _usuarioRepository.Atualizar(usuario, id);
            
            return Ok(usuario);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Deletar([FromRoute] int id)
        {
            bool apagado = await _usuarioRepository.Deletar(id);
            return Ok(apagado);
        }
    }
}
