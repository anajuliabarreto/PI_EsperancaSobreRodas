using EsperancaSobreRodasAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EsperancaSobreRodasAPI.Data.Map
{
    public class UsuarioMap : IEntityTypeConfiguration<UsuarioModel>
    {
        public void Configure(EntityTypeBuilder<UsuarioModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).ValueGeneratedOnAdd();
            builder.Property(x => x.NomePaciente).IsRequired();
            builder.Property(x => x.EmailUsuario).IsRequired();
            builder.Property(x => x.SenhaUsuario).IsRequired();
        }
    }
}
