namespace CoffeeShopRegistration.Models
{
    public enum Gen
    {
        Male,
        Female
    }
    public class User
    {
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string Country { get; set; }
        public Gen Gender { get; set; }
        public string UserEmail { get; set; }
        public string Password { get; set; }
    }
}
