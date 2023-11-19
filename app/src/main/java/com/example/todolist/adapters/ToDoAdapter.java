package com.example.todolist.adapters;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CheckBox;
import android.widget.CompoundButton;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.todolist.R;
import com.example.todolist.models.ToDoModel;
import com.example.todolist.utils.Database;

import java.util.ArrayList;
import java.util.List;

public class ToDoAdapter extends RecyclerView.Adapter<ToDoAdapter.ViewHolder> {

    private final Context context;
    private List<ToDoModel> tasks = new ArrayList<>();

    public ToDoAdapter(Context context) {
        this.context = context;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return new ViewHolder(LayoutInflater.from(context).inflate(R.layout.task_layout, parent, false));
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        ToDoModel toDoModel = tasks.get(position);
        holder.task.setText(toDoModel.getTask());
        holder.task.setChecked(toDoModel.getStatus() == 1);

        holder.task.setOnCheckedChangeListener((buttonView, isChecked) -> {
            if (isChecked) {
                Database.getInstance(context).updateStatus(1, toDoModel.getId());
            } else {
                Database.getInstance(context).updateStatus(0, toDoModel.getId());
            }
        });
    }

    @Override
    public int getItemCount() {
        return tasks.size();
    }

    public void setTasks(List<ToDoModel> list) {
        this.tasks = list;
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        CheckBox task;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            task = itemView.findViewById(R.id.taskCheckBox);
        }
    }
}
