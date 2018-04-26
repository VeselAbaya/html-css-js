$(document).ready(function() {
	$('#add-task-form').on('submit', function(event) {
		addTask(event);
	});

	$('#edit-task-form').on('submit', function(event) {
		updateTask(event)
	});

	$('#task-table').on('click', '#remove-task', function() {
		id = $(this).data('id');
		removeTask(id);
	});

	$('#clear-tasks').on('click', function() {
		clearAllTasks();
	});

	displayTasks();

	// Function to display tasks
	function displayTasks() {
		let taskList = JSON.parse(localStorage.getItem('tasks'));

		// sort tasks
		if (taskList != null) {
			taskList = taskList.sort(sortByTime);
		}

		 // check tasts
		 if (localStorage.getItem('tasks') != null) {
		 	// loop through and display
		 	$.each(taskList, function(key, value) {
		 		$('#task-table').append('<tr id="'+ value.id +'">' + 
		 							   '<td>' + value.task + '</td>' +
		 							   '<td>' + value.priority + '</td>' +
		 							   '<td>' + value.date + '</td>' +
		 							   '<td>' + value.time + '</td>' +
		 							   '<td><a href="edit.html?id='+value.id+'">Edit</a> | <a href="#" id="remove-task" data-id="'+value.id+'">Remove</a></td>' +
		 							   '</tr>');
		 	});
		 }
	}

	// function to sort tasks
	function sortByTime(left, right) {
		return ((left.time < right.time) ? -1 : ((left.time > right.time) ? 1 : 0))
	}

	// function to add task
	function addTask(event) {
		// add Unique ID
		let newDate = new Date();
		let id = newDate.getTime();
	
		let task = $('#task').val();
		let taskPriority = $('#priority').val();
		let taskDate = $('#date').val();
		let taskTime = $('#time').val();

		// Simple validation
		if (task == '') {
			alert('Task is required');
			event.preventDefault();
		} else if (taskDate == '') {
			alert('Date is required');
			event.preventDefault();
		} else if (taskTime == '') {
			alert('Time is required');
			event.preventDefault();
		} else if (taskPriority == '') {
			taskPriority = 'normal';
		} else {
			tasks = JSON.parse(localStorage.getItem('tasks'));

			// Check tasks
			if (tasks == null) {
				tasks = [];
			}

			// New task object
			let newTask = {
				'id': id,
				'task': task,
				'priority': taskPriority,
				'date': taskDate,
				'time': taskTime
			}

			tasks.push(newTask);
			localStorage.setItem('tasks', JSON.stringify(tasks));
			console.log('Task added');
		}
	}

	function updateTask(event) {
		let id = $('#task_id').val();
		let task = $('#task').val();
		let taskPriority = $('#priority').val();
		let taskDate = $('#date').val();
		let taskTime = $('#time').val();

		tasks = JSON.parse(localStorage.getItem('tasks'));
		for (let i = 0; i != tasks.length; ++i) {
			if (tasks[i].id == id) {
				tasks.splice(i, 1);
				break;
			}
		}

		if (task == '') {
			alert('Task is required');
			event.preventDefault();
		} else if (taskDate == '') {
			alert('Date is required');
			event.preventDefault();
		} else if (taskTime == '') {
			alert('Time is required');
			event.preventDefault();
		} else if (taskPriority == '') {
			taskPriority = 'normal';
		} else {
			// New task object
			let newTask = {
				'id': id,
				'task': task,
				'priority': taskPriority,
				'date': taskDate,
				'time': taskTime
			}

			tasks.push(newTask);
			localStorage.setItem('tasks', JSON.stringify(tasks));
			console.log('Task edited');
		}
	}

	function removeTask(id) {
		if (confirm('Are you sure you want to delete this task?')) {
			tasks = JSON.parse(localStorage.getItem('tasks'));
			for (let i = 0; i != tasks.length; ++i) {
				if (tasks[i].id == id) {
					tasks.splice(i, 1);
					localStorage.setItem('tasks', JSON.stringify(tasks));
					break;
				}
			}

			location.reload();
		}
	}

	function clearAllTasks() {
		if (confirm('Do you want to clear all tasks?')) {
			localStorage.clear();
			location.reload();
		}
	}
});

function getTask() {
	let $_GET = getQueryParams(document.location.search);
	let id = $_GET['id'];

	let taskList = JSON.parse(localStorage.getItem('tasks'));
	for (let i = 0; i != taskList.length; ++i) {
		if (taskList[i].id == id) {
			$('#edit-task-form #task_id').val(taskList[i].id);
			$('#edit-task-form #task').val(taskList[i].task);
			$('#edit-task-form #priority').val(taskList[i].priority);
			$('#edit-task-form #date').val(taskList[i].date);
			$('#edit-task-form #time').val(taskList[i].time);
		}
	}
}

function getQueryParams(qs) {
	qs = qs.split('+').join(" ");
	let params = {},
		  tokens,
		  regexp = /[?&]?([^=]+)=([^&]*)/g;
	while (tokens = regexp.exec(qs)) {
		params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}

	return params;
}