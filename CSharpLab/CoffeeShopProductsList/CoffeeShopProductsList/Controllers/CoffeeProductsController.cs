using CoffeeShopProductsList.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeShopProductsList.Controllers
{
    public class CoffeeProductsController : Controller
    {
        private readonly ILogger<CoffeeProductsController> _logger;
        private readonly ProductsDbContext _productsDbContext;

        public CoffeeProductsController(ILogger<CoffeeProductsController> logger, ProductsDbContext c)
        {
            _logger = logger;
            _productsDbContext = c;
        }
        public IActionResult CoffeeProductsIndex()
        {
            return View();
        }

        public IActionResult CoffeeProductsDetails()
        {
            List<Product> result = _productsDbContext.Products.ToList();
            return View(result);
        }
        public IActionResult DisplayDetails(Product e)
        {
          
            return View(e);
        }

      

    }
}
