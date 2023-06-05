using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestaurantFavesBackEnd.Model;

namespace RestaurantFavesBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        OrderDbContext db =new OrderDbContext();


        [HttpGet("orders")]
        public List<Order> GetOrders(string restaurant,bool orderAgain)
        {
            List<Order> orders = db.Orders.Where(o=>o.Restaurant == restaurant&&o.OrderAgain==true).ToList();
            return orders;
        }


        [HttpGet("allOrders")]
        public List<Order> GetallOrders()
        {
            return db.Orders.ToList();
        }

        [HttpGet("orders/{id} ")]
        public Order GetOrder(int id) 
        { 
            Order order = db.Orders.Where(o=>o.Id == id).FirstOrDefault();
            return order;
        }

        [HttpPost("orders")]
        public void PostOrder(Order order) 
        { 
            db.Orders.Add(order);
            db.SaveChanges();
        }

        [HttpPut("orders/{id}")]
        public void PutOrder(int id,Order order)
        {
            order.Id = id;
            db.Orders.Update(order);
            db.SaveChanges();
        }

        [HttpDelete("orders/{id}")]
        public void DeleteOrder(int id)
        {
            Order o=db.Orders.Find(id);
            db.Orders.Remove(o);
            db.SaveChanges();

        }

    }
}
