package com.example.todolist.models;

public class ToDoModel {
    private int id, status;
    private String task;

    public ToDoModel() {
    }

    public ToDoModel(int id, int status, String task) {
        this.id = id;
        this.status = status;
        this.task = task;
    }

    public int getId() {
        return id;
    }

    public int getStatus() {
        return status;
    }

    public String getTask() {
        return task;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public void setTask(String task) {
        this.task = task;
    }

    @Override
    public String toString() {
        return "ToDoModel{" +
                "id=" + id +
                ", status=" + status +
                ", task='" + task + '\'' +
                '}';
    }
}
