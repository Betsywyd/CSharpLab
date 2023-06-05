using Microsoft.AspNetCore.Mvc;
using ToDoApplicationBackEnd.Models;

namespace ToDoApplicationBackEnd.Controllers
{
    public class ApplicationController : Controller
    {
        //private readonly ApplicationDbContext _applicationDbContext;

        ApplicationDbContext db = new ApplicationDbContext();

        //public ApplicationController( ApplicationDbContext context)
        //{
        //    _applicationDbContext = context;
        //}
        public IActionResult Index()
        {
            List<Employee> employees=db.Employees.ToList();
            return View(employees);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Employee e)
        {
            db.Employees.Add(e);
            db.SaveChanges();
            return RedirectToAction("Index");
        }


        public IActionResult Update(int id)
        {
            List<Employee> list=db.Employees.ToList();  
           int index = list.FindIndex(e => e.Id == id);
           

            return View();

        }

        public IActionResult Delete(int id)
        {
            Employee employee = db.Employees.Find(id);
            db.Remove(employee);
            db.SaveChanges();
            return RedirectToAction("Index");
        }



    }
}
