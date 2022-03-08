'use strict'

const project = require('../models/project');
var Project = require('../models/project');
var fs = require('fs');

// Primera manera 

var controller = {

    home: function(req, res){
            return res.status(200).send({
            mesagge: 'YOU ARE AT HOME'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            mesagge: 'YOU ARE AT TEST'
        });
    },

    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;


        project.save((err, projectStored) =>{
            if(err) return res.status(500).send({mesagge: "Error al guardar el proyecto"});

            if(!projectStored) return res.status(404).send({mesagge: "No se ha podido guardar el proyecto"});

            return res.status(200).send({project: projectStored, mesagge: "Projecto guardado correctamente"});
        });
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if(projectId == null) return res.status(404).send({mesagge: "EL proyecto no existe."});

        Project.findById(projectId, (err, project)=>{

            if(err) return res.status(500).send({mesagge: "Error al devolver los datos."});

            if(!projectId) return res.status(404).send({mesagge: "EL proyecto no existe."});

            return res.status(200).send({project});
        });
    },

    getProjects: function(req, res){
        Project.find({}).exec((err, projects)=>{

            if(err) return res.status(500).send({mesagge: 'Error al devolver los datos.'});

            if(!projects) return res.status(404).send({mesagge: 'No hay proyectos para mostrar'});

            return res.status(200).send({projects});
        });
    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) =>{

            if(err) return res.status(500).send({mesagge: 'Error al actualizar.'});

            if(!projectUpdated) return res.status(404).send({mesagge: 'No existe el proyecto para actualizar'});

            return res.status(200).send({
                project: projectUpdated
            });
        });
    },

    deleteProject: function(req, res){
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectRemoved)=>{

            if(err) return res.status(500).send({mesagge: 'No se ha podido borrar el proyecto'});

            if(!projectRemoved) return res.status(404).send({mesagge: 'No se puede eliminar este proyecto'});

            return res.status(200).send({
                Project: projectRemoved,
                mesagge: 'Proyecto Eliminado'
            });

        });
    },

    uploadImage: function(req, res){
        var projectId = req.params.id;
        var fileName = 'Imagen no subida';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit =  fileName.split('\.');
            var fileExt = extSplit[1];


            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) =>{

                    if(err) return res.status(500).send({mesagge: 'La imagen no se ha subido'});

                    if(!projectUpdated) return res.status(404).send({mesagge: 'El proyecto no existe'});

                    return res.status(200).send({
                        project: projectUpdated
                    });
                });

            }else{
                fs.unlink(filePath, (err)=>{
                    return res.status(200).send({mesagge: 'La extension no es válida'});
                });
            }
        }else{
            return res.status(200).send({
                mesagge: fileName
            });
        };
    }
};

module.exports = controller;