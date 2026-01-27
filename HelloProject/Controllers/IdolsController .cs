using HelloProject.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace HelloProject.Controllers
{
    public class IdolsController : Controller
    {
        private readonly ILogger<IdolsController> _logger;

        public IdolsController(ILogger<IdolsController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult JpIndex()
        { 
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}