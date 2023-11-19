package com.example.todolist.utils;

import android.annotation.SuppressLint;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import com.example.todolist.models.ToDoModel;

import java.util.ArrayList;
import java.util.List;

public class Database extends SQLiteOpenHelper {
    private static final String DATABASE_NAME = "todolist.db";
    private static final int DATABASE_VERSION = 1;
    private static Database instance = null;

    private Database(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    public static Database getInstance(Context context) {
        if (instance == null) {
            instance = new Database(context);
        }

        return instance;
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL("CREATE TABLE IF NOT EXISTS `tasks` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `status` INTEGER NOT NULL, `task` TEXT NOT NULL)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS `tasks`");
        onCreate(db);
    }

    public void insert(String task) {
        SQLiteDatabase db = getWritableDatabase();
        db.execSQL("INSERT INTO `tasks` (`status`, `task`) VALUES (?, ?)", new Object[]{0, task});
        db.close();
    }

    public void updateTask(String task, int id) {
        SQLiteDatabase db = getWritableDatabase();
        db.execSQL("UPDATE `tasks` SET `task` = ? WHERE `id` = ?", new Object[]{task, id});
        db.close();
    }

    public void updateStatus(int status, int id) {
        SQLiteDatabase db = getWritableDatabase();
        db.execSQL("UPDATE `tasks` SET `status` = ? WHERE `id` = ?", new Object[]{status, id});
        db.close();
    }

    public void update(int id, int status, String task) {
        SQLiteDatabase db = getWritableDatabase();
        db.execSQL("UPDATE `tasks` SET `status` = ?, `task` = ? WHERE `id` = ?", new Object[]{status, task, id});
        db.close();
    }

    public void delete(int id) {
        SQLiteDatabase db = getWritableDatabase();
        db.execSQL("DELETE FROM `tasks` WHERE `id` = ?", new Object[]{id});
        db.close();
    }

    public void deleteAll() {
        SQLiteDatabase db = getWritableDatabase();
        db.execSQL("DELETE FROM `tasks`");
        db.close();
    }

    public List<ToDoModel> selectAll() {
        SQLiteDatabase db = getReadableDatabase();
        List<ToDoModel> list = new ArrayList<>();

        try (Cursor cursor = db.rawQuery("SELECT * FROM `tasks`", null)) {
            if (cursor.moveToFirst()) {
                do {
                    list.add(new ToDoModel(cursor.getInt(0), cursor.getInt(1), cursor.getString(2)));
                } while (cursor.moveToNext());
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            db.close();
        }

        return list;
    }
}
