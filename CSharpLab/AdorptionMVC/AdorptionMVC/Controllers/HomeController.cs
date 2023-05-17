using AdorptionMVC.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Diagnostics;

namespace AdorptionMVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly AdoptionDbContext _context;

        public HomeController(ILogger<HomeController> logger, AdoptionDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            List<Animal> alist = _context.Animals.ToList();
            List<Animal> br = alist.DistinctBy(i => i.Breed).ToList();

            return View(br);
      
        }
    

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Add(Animal a)
        {
            _context.Animals.Add(a);
            _context.SaveChanges();
            return RedirectToAction("Add");
        }

        public IActionResult Add()
        {

            return View();
        }
        public IActionResult Adopt(int id)
        {
            Animal e= _context.Animals.Find(id);
            _context.Animals.Remove(e);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }
       


        public IActionResult Result(string breed)
        {
            List<Animal> alist = _context.Animals.ToList();
            List <Animal> br= _context.Animals.Where(i => i.Breed == breed).ToList();
          
                return View(br);
        
            //Animal a = _context.Animals.FirstOrDefault(e => e.Id == id);
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}