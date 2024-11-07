using EsperancaSobreRodasAPI.Data;
using EsperancaSobreRodasAPI.Models;
using EsperancaSobreRodasAPI.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

namespace EsperancaSobreRodasAPI.Repositories
{  
        public class UsuarioRepository : IUsuarioRepository
        {

            private readonly EsperancaSobreRodasDBContext _dbContext;
            public UsuarioRepository(EsperancaSobreRodasDBContext esperancaSobreRodasDBContext)
            {
                _dbContext = esperancaSobreRodasDBContext;
            }

            public async Task<UsuarioModel> BuscarPorId(int id)
            {
                return await _dbContext.Usuarios.FirstOrDefaultAsync(x => x.Id == id);
            }

            public Task<UsuarioModel> BuscarPorEmail(string email)
            {
                UsuarioModel usuario = _dbContext.Usuarios.FirstOrDefault(x => x.EmailUsuario == email);
                
                return Task.FromResult(usuario);
            }
            public async Task<List<UsuarioModel>> BuscarTodosUsuarios()
            {
                return await _dbContext.Usuarios.ToListAsync();
            }

            public async Task<UsuarioModel> Cadastrar(UsuarioModel usuario)
            {
                await _dbContext.Usuarios.AddAsync(usuario);
                await _dbContext.SaveChangesAsync();

                return usuario;
            }
            public async Task<UsuarioModel> Atualizar(UsuarioModel usuario, int id)
            {
                UsuarioModel usuarioPorId = await BuscarPorId(id);

                if (usuarioPorId == null)
                {
                    throw new Exception($"Usuário referente ao ID: {id} não foi encontrado");
                }

                usuarioPorId.NomePaciente = usuario.NomePaciente;
                usuarioPorId.EmailUsuario = usuario.EmailUsuario;
                usuarioPorId.SenhaUsuario = usuario.SenhaUsuario;

                _dbContext.Usuarios.Update(usuarioPorId);
                await _dbContext.SaveChangesAsync();

                return usuarioPorId;
            }

            public async Task<bool> Deletar(int id)
            {
                UsuarioModel usuarioPorId = await BuscarPorId(id);

                if (usuarioPorId == null)
                {
                    throw new Exception($"Usuário referente ao ID: {id} não foi encontrado");
                }

                _dbContext.Usuarios.Remove(usuarioPorId);
                await _dbContext.SaveChangesAsync();

                return true;
            }
        }
}

