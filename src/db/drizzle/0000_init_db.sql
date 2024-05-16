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
CREATE TABLE `subTasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text(255) NOT NULL,
	`taskId` integer NOT NULL,
	`statusId` integer NOT NULL,
	`createdAt` text(255) NOT NULL,
	FOREIGN KEY (`taskId`) REFERENCES `tasks`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`statusId`) REFERENCES `statuses`(`id`) ON UPDATE cascade ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`task` text(255) NOT NULL,
	`description` text(255),
	`categoryId` integer NOT NULL,
	`statusId` integer NOT NULL,
	`priorityId` integer NOT NULL,
	`dueDate` text(255),
	`createdAt` text(255) NOT NULL,
	FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`statusId`) REFERENCES `statuses`(`id`) ON UPDATE cascade ON DELETE cascade,
	FOREIGN KEY (`priorityId`) REFERENCES `priorities`(`id`) ON UPDATE cascade ON DELETE cascade
);
