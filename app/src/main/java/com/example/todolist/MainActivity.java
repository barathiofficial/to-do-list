package com.example.todolist;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.todolist.adapters.ToDoAdapter;
import com.example.todolist.models.ToDoModel;
import com.example.todolist.utils.Database;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        EditText taskEditText = findViewById(R.id.taskEditText);
        Button addTaskButton = findViewById(R.id.addTaskButton);

        RecyclerView taskRecyclerView = findViewById(R.id.taskRecyclerView);
        ToDoAdapter toDoAdapter = new ToDoAdapter(MainActivity.this);

        taskRecyclerView.setLayoutManager(new LinearLayoutManager(MainActivity.this));
        taskRecyclerView.setAdapter(toDoAdapter);

        addTaskButton.setOnClickListener(v -> {
            String task = taskEditText.getText().toString();
            Database.getInstance(MainActivity.this).insert(task);
            taskEditText.setText("");

            List<ToDoModel> tasks = Database.getInstance(MainActivity.this).selectAll();

            toDoAdapter.setTasks(tasks);
            toDoAdapter.notifyDataSetChanged();

        });

        List<ToDoModel> tasks = Database.getInstance(MainActivity.this).selectAll();
        toDoAdapter.setTasks(tasks);
        toDoAdapter.notifyDataSetChanged();
    }
}