using EsperancaSobreRodasAPI.Models;

namespace EsperancaSobreRodasAPI.DTO;

public class CriarUsuarioDTO
{
    public string NomePaciente { get; set; }
    public string EmailUsuario { get; set; }
    public string SenhaUsuario { get; set; }
    
    public UsuarioModel toModel()
    {
        return new UsuarioModel
        {
            NomePaciente = this.NomePaciente,
            EmailUsuario = this.EmailUsuario,
            SenhaUsuario = this.SenhaUsuario
        };
    }
}