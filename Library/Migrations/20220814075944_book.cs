using Microsoft.EntityFrameworkCore.Migrations;

namespace Library.Migrations
{
    public partial class book : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Book");

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Book",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Book");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Book",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
