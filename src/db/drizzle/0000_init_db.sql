CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `priorities` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `statuses` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sub_tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text(255) NOT NULL,
	`task_id` integer NOT NULL,
	`status_id` integer NOT NULL,
	`created_at` text(255) NOT NULL,
	FOREIGN KEY (`task_id`) REFERENCES `tasks`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`status_id`) REFERENCES `statuses`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text(255) NOT NULL,
	`description` text(255),
	`category_id` integer NOT NULL,
	`status_id` integer NOT NULL,
	`priority_id` integer NOT NULL,
	`due_date` text(255),
	`created_at` text(255) NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`status_id`) REFERENCES `statuses`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`priority_id`) REFERENCES `priorities`(`id`) ON UPDATE cascade ON DELETE cascade
);
