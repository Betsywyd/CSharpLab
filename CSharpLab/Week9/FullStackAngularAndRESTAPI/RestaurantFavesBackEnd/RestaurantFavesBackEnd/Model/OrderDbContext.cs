using Microsoft.EntityFrameworkCore;

namespace RestaurantFavesBackEnd.Model
{
    public class OrderDbContext:DbContext
    {
      
            //Db set always needs to be public
           
            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                if (!optionsBuilder.IsConfigured)
                {
                    optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=OrderDB;Trusted_Connection=True;TrustServerCertificate=True");
                }
            }
        public DbSet<Order> Orders { get; set; }
    }

    
}
