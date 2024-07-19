using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelloProject.Controllers
{
    public class OthersController : Controller
    {
        // GET: OthersController
        public ActionResult Index()
        {
            return View();
        }

    }
}
