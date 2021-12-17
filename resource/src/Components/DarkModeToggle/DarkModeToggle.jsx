import $ from "jquery";
import React from "react";
export default function DarkModeToggle() {
	const [checked, setChecked] = React.useState(
		localStorage.getItem("bgmode") === "dark" ? true : false
	);

	const setDarkMode = () => {
		document.querySelectorAll(".bg-light").forEach((element) => {
			element.className = element.className.replace(/-light/g, "-dark");
		});

		document.body.classList.add("bg-dark");
		if (document.body.classList.contains("text-dark")) {
			document.body.classList.replace("text-dark", "text-light");
		} else {
			document.body.classList.add("text-light");
		}
	};

	const setLightMode = () => {
		document.querySelectorAll(".bg-dark").forEach((element) => {
			element.className = element.className.replace(/-dark/g, "-light");
		});
		document.body.classList.remove("bg-dark");
		if (document.body.classList.contains("text-light")) {
			document.body.classList.replace("text-light", "text-dark");
		} else {
			document.body.classList.add("text-dark");
		}
	};

	const toggleBgMode = () => {
		const currentMode = localStorage.getItem("bgmode");
		const newMode = currentMode === "dark" ? "light" : "dark";
		localStorage.setItem("bgmode", newMode);

		if (newMode === "dark") {
			setChecked(true);
			setDarkMode();
		} else {
			setChecked(false);
			setLightMode();
		}
	};

	const getSystemDefaultTheme = () => {
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	};

	React.useEffect(() => {
		var currentMode = localStorage.getItem("bgmode");
		if (currentMode == null) {
			currentMode = getSystemDefaultTheme();
			currentMode = currentMode ? "dark" : "light";
			localStorage.setItem("bgmode", currentMode);
		}

		if (currentMode === "dark") {
			// isChecked = true;
			setChecked(true);
			var checkExist = setInterval(function () {
				if ($(".bg-light").length) {
					clearInterval(checkExist);
					setDarkMode();
				}
			}, 100); // check every 100ms
		} else {
			// isChecked = false;
			setChecked(false);
			setLightMode();
		}
	}, []);

	return (
		<div className='form-check form-switch ms-auto mt-3 me-3'>
			<label className='form-check-label ms-3' htmlFor='lightSwitch'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={"25"}
					height={"25"}
					fill='currentColor'
					className='bi bi-brightness-high'
					viewBox='0 0 16 16'
				>
					<path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
				</svg>
			</label>
			<input
				className='form-check-input'
				type={"checkbox"}
				id='lightSwitch'
				onChange={toggleBgMode}
				checked={checked}
				style={{ marginTop: "7px", marginLeft: "0px" }}
			/>
		</div>
	);
}
