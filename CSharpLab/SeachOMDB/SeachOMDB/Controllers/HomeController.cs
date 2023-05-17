using Microsoft.AspNetCore.Mvc;
using SeachOMDB.Models;
using System.Diagnostics;

namespace SeachOMDB.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        MovieDAL movieAPI=new MovieDAL();

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public IActionResult MovieSearchForm()
        {
            return View("MovieSearch");
        }

        [HttpPost]
        public IActionResult MovieSearchResults(string Title)
        {
            Movie m = movieAPI.GetMovie(Title);
            return View("MovieSearch",m);
        }

        [HttpGet]
        public IActionResult MovieNightForm()
        {
         
            return View("MovieNight");
        }

        [HttpPost]
        public IActionResult MovieNightResults(string Title1, string Title2, string Title3)
        {
            List<Movie> movies =new List<Movie>();
            movies.Add(movieAPI.GetMovie(Title1));
            movies.Add(movieAPI.GetMovie(Title2));
            movies.Add(movieAPI.GetMovie(Title3));

            return View("MovieNight",movies);
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