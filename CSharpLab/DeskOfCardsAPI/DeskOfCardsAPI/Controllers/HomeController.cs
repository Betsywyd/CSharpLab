using DeskOfCardsAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace DeskOfCardsAPI.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        DeskDAL DeskAPI { get; set; } = new DeskDAL();

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            Desk d = DeskAPI.GetDesk();
            return View(d);
        }

        public IActionResult ShowHand(string id)
        {
            Hand h = DeskAPI.GetHand(id);
            return View(h);
        }

   
        public IActionResult CardsDetails(string id,string code)
        {
            Images i= DeskAPI.GetHand(id).cards.FirstOrDefault(card => card.code==code).images;
            return View(i);
        }

        public IActionResult Privacy()
        {

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}