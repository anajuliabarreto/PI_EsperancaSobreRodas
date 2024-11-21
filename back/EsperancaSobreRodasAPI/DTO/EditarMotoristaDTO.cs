using EsperancaSobreRodasAPI.Models;

namespace EsperancaSobreRodasAPI.DTO;

public class EditarMotoristaDTO
{

    public string NumeroPlaca { get; set; }
    public string NomeMotorista { get; set; }
    public string TelefoneMotorista { get; set; }
    public string NumeroDocumentoMotorista { get; set; }
    
    public MotoristaModel toModel()
    {
        return new MotoristaModel
        {
            NumeroPlaca = this.NumeroPlaca,
            NomeMotorista = this.NomeMotorista,
            TelefoneMotorista = this.TelefoneMotorista,
            NumeroDocumentoMotorista = this.NumeroDocumentoMotorista,
        };
    }
}