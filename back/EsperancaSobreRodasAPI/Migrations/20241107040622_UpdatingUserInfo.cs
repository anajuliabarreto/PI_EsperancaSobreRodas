# ATT
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EsperancaSobreRodasAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdatingUserInfo : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NomeUsuario",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "TelefoneUsuario",
                table: "Usuarios");

            migrationBuilder.RenameColumn(
                name: "TipoUsuario",
                table: "Usuarios",
                newName: "EmailUsuario");

            migrationBuilder.AlterColumn<string>(
                name: "NomePaciente",
                table: "Usuarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "EmailUsuario",
                table: "Usuarios",
                newName: "TipoUsuario");

            migrationBuilder.AlterColumn<string>(
                name: "NomePaciente",
                table: "Usuarios",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "NomeUsuario",
                table: "Usuarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "TelefoneUsuario",
                table: "Usuarios",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
