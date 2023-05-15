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
           
            List<Animal> a = _context.Animals.ToList();
            return View(a);
        }
    

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Add(Animal a)
        {
            _context.Animals.Add(a);
            _context.SaveChanges();
            return RedirectToAction("Add");
        }

        public IActionResult Adopt(int id)
        {
            Animal a = _context.Animals.FirstOrDefault(e => e.Id == id);
            _context.Animals.Remove(a);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }


        public IActionResult Result(string bre)
        {
            List<Animal> alist = _context.Animals.ToList();
            List <Animal> re= new List<Animal>();
            for (int i = 0; i < alist.Count(); i++)
            {
                if (alist[i].Breed == bre)
               {
                    re.Add(alist[i]);
                }
 
            }
                return View(re);
        
            //Animal a = _context.Animals.FirstOrDefault(e => e.Id == id);
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}