using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TestProject.Controllers
{
    public class HomeController : Controller    
    {
        public ActionResult Index()
        {
            List<Entities.User> lstUsers = new List<Entities.User>();
            lstUsers.Add(new Entities.User { ID = 1, FirstName = "aaa", LastName = "AAA" });
            lstUsers.Add(new Entities.User { ID = 2, FirstName = "bbb", LastName = "BBB" });
            lstUsers.Add(new Entities.User { ID = 3, FirstName = "ccc", LastName = "CCC" });
            lstUsers.Add(new Entities.User { ID = 4, FirstName = "ddd", LastName = "DDD" });
            lstUsers.Add(new Entities.User { ID = 5, FirstName = "eee", LastName = "EEE" });
            HttpContext.Session["UserList"] = lstUsers;

            return View();
        }
    }
}
