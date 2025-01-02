using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HelloProject.Controllers
{
    public class OthersController : Controller
    {
        // GET: OthersController
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
