using Microsoft.EntityFrameworkCore;
using Library.Models;

namespace Library.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb; Database=LibraryDB; Trusted_Connection=True");
        }
    }
}
