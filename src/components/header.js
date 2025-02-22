export function Header() {
  const $header = document.createElement('header');
  $header.classList.add("bg-blue-500", "text-white", "text-center", "py-4");
  $header.innerHTML = `
    <h1 class="text-2xl">AAAAAA</h1>
    <nav>
      <ul class="inline-flex justify-center mt-4">
        <li class="mr-6">
          <a href="/" class="hover:underline">Home</a>
        </li>
        <li class="mr-6">
          <a href="/login" class="hover:underline">Login</a>
        </li>
        <li class="mr-6">
          <a href="/about" class="hover:underline">About</a>
        </li>
        <li>
          <a href="/contact" class="hover:underline">Contact</a>
        </li>
      </ul>
    </nav>
  `;
  return $header;
}
