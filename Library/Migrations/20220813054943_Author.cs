using Microsoft.EntityFrameworkCore.Migrations;

namespace Library.Migrations
{
    public partial class Author : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LName",
                table: "Author",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MName",
                table: "Author",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LName",
                table: "Author");

            migrationBuilder.DropColumn(
                name: "MName",
                table: "Author");
        }
    }
}
