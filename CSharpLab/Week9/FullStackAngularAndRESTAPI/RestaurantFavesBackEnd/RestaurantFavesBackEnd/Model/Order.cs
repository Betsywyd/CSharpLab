using Microsoft.AspNetCore.DataProtection.KeyManagement;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestaurantFavesBackEnd.Model
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
       public string Description { get; set; }

        public string Restaurant { get; set; }

        public int Rating { get; set; }

        public bool OrderAgain { get; set; }

   

    }
}
