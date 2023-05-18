using Microsoft.AspNetCore.Mvc;
using NorthwindAPI.Models;

namespace NorthwindAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderDetailController : Controller
    {
        NorthwndContext db = new NorthwndContext();

        [HttpGet("/byQuantity>{q}&orderby-Quantity")]
        public List<OrderDetail> GetOrderDetail(int q) 
        { 
          List<OrderDetail> list = db.OrderDetails.Where(o => o.Quantity > q).OrderBy(i=>i.Quantity).ToList();

            return list;
        }
        [HttpDelete("OrderId {id}delete")]
        public string DeleteOrderDetail(int id)
        {
            OrderDetail o = db.OrderDetails.Where(o=>o.OrderId==id).ToList().FirstOrDefault();
            if (o != null)
            {
                db.OrderDetails.Remove(o);
                db.SaveChanges();
                return $"OrderDetail at {id} was deleted successfully";
            }
            else
            {
                return $"There was no OrderDetail at {id}, nothing was deleted";
            }
        }

       

        [HttpPost]
        public string CreateOrderDetail(OrderDetail od)
        {
            db.OrderDetails.Add(od);
            db.SaveChanges();

            return $"{od.OrderId} was successfully added to the database";

        }


    }
}
