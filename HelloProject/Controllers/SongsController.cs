using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelloProject.Controllers
{
    public class SongsController : Controller
    {
        // GET: SongsController
        public ActionResult Index()
        {
            return View();
        }

    }
}
