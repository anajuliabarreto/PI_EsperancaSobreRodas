namespace EsperancaSobreRodasAPI.Models
{
    public class MotoristaModel
    {
        public int Id { get; set; }
        public string NumeroPlaca { get; set; }
        public string NomeMotorista { get; set; }
        public string SenhaMotorista { get; set; }
        public string TelefoneMotorista { get; set; }
        public string NumeroDocumentoMotorista { get; set; } 

        //public int Status { get; set; } // Disponibilidade ou status ativo/inativo posteriormente
    }
}
