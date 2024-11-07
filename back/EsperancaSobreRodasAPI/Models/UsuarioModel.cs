namespace EsperancaSobreRodasAPI.Models
{
    public class UsuarioModel
    {
        public int Id { get; set; }
        public string? NomePaciente { get; set; } //Caso o responsável se cadastre, saber quem é o paciente 
        
        public required string EmailUsuario { get; set; }
        public required string SenhaUsuario { get; set; }

        //public string EnderecoUsuario { get; set; } -> Posteriormente relacionar com a viagem 
    }
}
