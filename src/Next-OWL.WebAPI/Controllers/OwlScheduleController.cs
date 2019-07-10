﻿using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Next_OWL.Models.Output;
using Next_OWL.Services;

namespace Next_OWL.Controllers
{
    [Route("api/schedule")]
    [ApiController]
    public class OwlScheduleController : ControllerBase
    {
        private readonly OwlService owlService;

        public OwlScheduleController(OwlService owlService)
        {
            this.owlService = owlService;
        }

        // GET api/values
        [HttpGet("nextgame")]
        public async Task<Game> GetNextGame()
        {
            return await this.owlService.GetNextGame();
        }

        [HttpGet]
        public async Task<IOrderedEnumerable<Game>> Get()
        {
            return await this.owlService.GetFutureGames();
        }
    }
}