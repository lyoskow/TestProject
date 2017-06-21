using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace TestProject.Controllers
{
    public class ListController : Controller
    {
        public static List<Entities.User> lstUsers = new List<Entities.User>();

        //HomeController h = new HomeController();

        [HttpGet]
        public JsonResult GetUserList()
        {
            var userList = HttpContext.Session["UserList"] as List<Entities.User>;
            return Json(userList, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult UpdateUserDetails(Entities.User user)
        {
            var userList = HttpContext.Session["UserList"] as List<Entities.User>;
            int index = userList.FindIndex(a => a.ID == user.ID);
            userList[index] = user;
            return Json(userList, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult InsertUserDetails(Entities.User user)
        {
            var userList = HttpContext.Session["UserList"] as List<Entities.User>;
            int? newID = userList.Max(u => (int?)u.ID);
            newID += 1;
            user.ID = newID;
            userList.Add(user);
            return Json(userList, JsonRequestBehavior.AllowGet);
        }

        public ListController()
        {
        }
    }
}
