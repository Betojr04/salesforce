/**
 * @description       : 
 * @author            : Beto
 * @group             : 
 * @last modified on  : 01-31-2024
 * @last modified by  : Beto
**/
public with sharing class ProjectAssignmentRules {
    // method to get all the project assignment rules

    public with sharing class ProjectAssignmentRules {
    public static List<ProjectAssignmentRule__c> getProjectAssignmentRules() {
        if (Schema.sObjectType.ProjectAssignmentRule__c.isAccessible()) {
            return [SELECT Id, Name, Project__c, Resource__c, Start_Date__c, End_Date__c, Role__c, Status__c FROM ProjectAssignmentRule__c];
        }
        return new List<ProjectAssignmentRule__c>(); // <-- this returns an empty list if the user does not have access to the object
    }
}

}