/**
 * @description       : 
 * @author            : Beto
 * @group             : 
 * @last modified on  : 02-02-2024
 * @last modified by  : Beto
**/
public with sharing class LeadController {
    @AuraEnabled(cacheable=true)
    public static List<Lead> getLeads() {
        if (!Schema.sObjectType.Lead.isAccessible()) {
            throw new System.NoAccessException();
        }
        return [SELECT Id, Name, Email, Phone, Company FROM Lead];
    }
}
