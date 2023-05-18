using Microsoft.AspNetCore.Mvc;
using NorthwindAPI.Models;

namespace NorthwindAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : Controller
    {
        NorthwndContext db = new NorthwndContext();
        [HttpGet]
        public List<Order> GetOrders()
        {
            return db.Orders.ToList();
        }

        [HttpGet("{id}")]
        public Order GetOrder(int id)
        {
            Order o = db.Orders.Where(i=>i.OrderId==id).ToList().FirstOrDefault();
            if (o != null)
            {
                return o;
            }
            else
            {
                return null;
            }
        }

      

    }
}
