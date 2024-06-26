import { RouterProvider, createRouter } from "@tanstack/react-router"
import { StrictMode } from "react"
import ReactDOM from "react-dom/client"

// Import the generated route tree
import { routeTree } from "./routeTree.gen"

// Create a new router instance
const router = createRouter({ routeTree, basepath: import.meta.env.BASE_URL })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}

// Render the app
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const rootElement = document.getElementById("app")!
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)
	root.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	)
}
