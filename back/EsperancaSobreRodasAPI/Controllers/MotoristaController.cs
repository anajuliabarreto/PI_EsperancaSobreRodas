using EsperancaSobreRodasAPI.DTO;
using EsperancaSobreRodasAPI.Models;
using EsperancaSobreRodasAPI.Repositories.Interface;
using Microsoft.AspNetCore.Mvc;

namespace EsperancaSobreRodasAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MotoristaController(IMotoristaRepository motoristaRepository) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<MotoristaModel>>> BuscarTodosMotoristas()
        {
            List<MotoristaModel> motoristas = await motoristaRepository.BuscarTodosMotoristas();
            return Ok(motoristas);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MotoristaModel>> BuscarPorId([FromRoute] int id)
        {
            MotoristaModel motorista = await motoristaRepository.BuscarPorId(id);
            return Ok(motorista);
        }

        [HttpPost]
        public async Task<ActionResult<MotoristaModel>> Cadastrar([FromBody] CriarMotoristaDTO motoristaModel)
        {
            MotoristaModel motorista = await motoristaRepository.Cadastrar(motoristaModel.toModel());
            
            return Ok(motorista);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<MotoristaModel>> Atualizar([FromBody] EditarMotoristaDTO motoristaModel, int id)
        {
            MotoristaModel motorista = await motoristaRepository.BuscarPorId(id);
            
            if (motorista == null)
            {
                return NotFound(new { mensagem = "Motorista não encontrado" });
            }
            
            motorista.NomeMotorista = motoristaModel.NomeMotorista;
            motorista.NumeroPlaca = motoristaModel.NumeroPlaca;
            motorista.TelefoneMotorista = motoristaModel.TelefoneMotorista;
            motorista.NumeroDocumentoMotorista = motoristaModel.NumeroDocumentoMotorista;
            
            motorista = await motoristaRepository.Atualizar(motorista, id);
            
            return Ok(motorista);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Deletar([FromRoute] int id)
        {
            bool apagado = await motoristaRepository.Deletar(id);
            return Ok(apagado);
        }
    }
}
