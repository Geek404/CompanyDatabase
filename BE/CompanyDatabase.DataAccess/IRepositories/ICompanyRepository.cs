using System;
using System.Collections.Generic;
using CompanyDatabase.DataAccess.Models;

namespace CompanyDatabase.DataAccess.IRepositories
{
   public interface ICompanyRepository
   {
      IEnumerable<Company> LoadAll();

      int Create(Company entity);

      int Update(Company entity);

      Company Get(int id);

      bool Delete(int id);
   }
}
