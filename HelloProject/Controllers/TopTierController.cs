using Microsoft.AspNetCore.Mvc;

namespace HelloProject.Controllers
{
    public class TopTierController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
