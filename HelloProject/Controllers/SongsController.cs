using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelloProject.Controllers
{
    public class SongsController : Controller
    {
        // GET: SongsController
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult JpIndex()
        {
            return View();
        }

    }
}
