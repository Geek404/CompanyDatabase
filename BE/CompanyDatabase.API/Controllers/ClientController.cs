using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using CompanyDatabase.DataAccess.IRepositories;
using CompanyDatabase.DataAccess.Models;
using CompanyDatabase.Infrastructure;


namespace CompanyDatabase.API.Controllers
{
   [RoutePrefix("api/company")]
   public class CompanyController : ApiController
   {
      private readonly ICompanyRepository _companyRepository;

      public CompanyController()
      {
         _companyRepository = new CompanyRepository();
      }

      public CompanyController(ICompanyRepository companyRepository)
      {
         _companyRepository = companyRepository;
      }
      
      [Route("load")]
      [HttpGet]
      public IEnumerable<Company> Load()
      {
         return _companyRepository.LoadAll().ToList();
      }

      [Route("create")]
      [HttpPost]
      public int Create([FromBody] Company company)
      {
         return _companyRepository.Create(company);
      }

      [Route("get/{id}")]
      [HttpGet]
      public Company Get(int id)
      {
         return _companyRepository.Get(id);
      }

      [Route("update")]
      [HttpPut]
      public int Update([FromBody] Company company)
      {
         var existingData = _companyRepository.Get(company.Id);
         company.CreateDate = existingData.CreateDate;
         return _companyRepository.Update(company);
      }

      [Route("delete/{id}")]
      [HttpDelete]
      public bool Delete(int id)
      {
         return _companyRepository.Delete(id);
      }
   }
}
