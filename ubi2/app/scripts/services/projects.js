'use strict';

/**
 * @ngdoc service
 * @name ubiApp.allProjects
 * @description
 * # allProjects
 * Factory in the ubiApp.
 */
angular.module('ubiApp')
  .factory('Project', function ($http,serverLoc) {
    var _myProjects=function(){
      return $http.get(serverLoc.serverUrl + '/auth/project/', {
                    });
    }
    var _userProjects=function(userId){
        return $http.get(serverLoc.serverUrl + '/auth/project/byUser/' + userId, {
                    });
    }
    var _searchProjects=function(searchParams){
        return[];
        
    }

    var _newProject=function(project){
            $http.post(serverLoc.serverUrl + '/auth/project',{
                title: project.title,        
                Description: '',
                status: 'New'
            })
        
        
    }

    var _updateProject=function(project){
        //get the current project details and update to the new value
    }
    var _projectDetails=function(projectId){
        return $http.get(serverLoc.serverUrl + '/auth/project/'+projectId, {
                    });
    }
    return {
      userProjects: _userProjects,
      searchProjects:_searchProjects,
      newProject:_newProject,
      updateProject:_updateProject,
      myProjects:_myProjects,
      projectDetails:_projectDetails
    }
  });
