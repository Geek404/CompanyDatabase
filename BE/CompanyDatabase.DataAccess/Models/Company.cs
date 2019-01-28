using Newtonsoft.Json;

namespace CompanyDatabase.DataAccess.Models
{
   public class Company : Base
   {
      [JsonProperty(PropertyName = "company_name")]
      public string CompanyName { set; get; }

      [JsonProperty(PropertyName = "employee_number")]
      public int NumberOfEmployees { get; set; }

      [JsonProperty(PropertyName = "address")]
      public string Address { get; set; }

      [JsonProperty(PropertyName = "contact_phone")]
      public string ContactPhone { get; set; }

      [JsonProperty(PropertyName = "contact_person")]
      public string ContactPerson { get; set; }
   }
}
