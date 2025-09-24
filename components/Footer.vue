<img
            src="/d.png"
            ></img>
          
<script setup>
import { Twitter, Youtube, Linkedin, Instagram, Facebook } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-black text-white px-6 sm:px-10 md:px-20 pt-12 md:pt-16 pb-8 md:pb-10">
    <!-- Top section -->
    <div class="mb-10 md:mb-12">
      <h2 class="text-[22px] sm:text-[26px] md:text-[28px] font-medium mb-6 sm:mb-8">
        Learn how to use Figma
      </h2>
      <div class="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-10 text-[16px] sm:text-[18px]">
        <a href="#" class="flex items-center gap-2 hover:underline">
          Figma Design: Beginner tutorial
          <img src="/i1.png" alt="Beginner tutorial" class="h-6 w-6 object-contain transition-transform duration-500 hover:rotate-180" />
        </a>
        <a href="#" class="flex items-center gap-2 hover:underline">
          Intro to design systems
          <img src="/i2.png" alt="Design systems" class="h-6 w-6 object-contain transition-transform duration-500 hover:rotate-180" />
        </a>
        <a href="#" class="flex items-center gap-2 hover:underline">
          Guide to FigJam
          <img src="/i3.png" alt="FigJam" class="h-6 w-6 object-contain transition-transform duration-500 hover:rotate-180" />
        </a>
      </div>
    </div>

    <!-- Main footer grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 text-[14px] leading-6 text-gray-300">
      <!-- Logo + Social -->
      <div>
        <h3 class="text-[20px] font-medium mb-6 text-white">Figma</h3>
        <div class="flex items-center space-x-4 mb-6 md:mb-8">
          <a href="#"><Twitter class="h-5 w-5" /></a>
          <a href="#"><Youtube class="h-5 w-5" /></a>
          <a href="#"><Linkedin class="h-5 w-5" /></a>
          <a href="#"><Instagram class="h-5 w-5" /></a>
          <a href="#"><Facebook class="h-5 w-5" /></a>
        </div>
      </div>

      <!-- Product -->
      <div>
        <h4 class="text-[12px] font-semibold text-gray-400 mb-3 sm:mb-4">PRODUCT</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Figma Design</a></li>
          <li><a href="#" class="hover:underline">Dev Mode</a></li>
          <li><a href="#" class="hover:underline">FigJam</a></li>
          <li><a href="#" class="hover:underline">Figma Slides</a></li>
          <li class="flex items-center gap-2">
            <a href="#" class="hover:underline">Figma Draw</a>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-700">NEW</span>
          </li>
          <li class="flex items-center gap-2">
            <a href="#" class="hover:underline">Figma Buzz</a>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-700">BETA</span>
          </li>
          <li class="flex items-center gap-2">
            <a href="#" class="hover:underline">Figma Sites</a>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-700">BETA</span>
          </li>
          <li class="flex items-center gap-2">
            <a href="#" class="hover:underline">Figma Make</a>
            <span class="text-[10px] px-1.5 py-0.5 rounded bg-gray-700">NEW</span>
          </li>
          <li><a href="#" class="hover:underline">AI</a></li>
          <li><a href="#" class="hover:underline">Downloads</a></li>
          <li><a href="#" class="hover:underline">Release notes</a></li>
        </ul>
        <h4 class="text-[12px] font-semibold text-gray-400 mt-5 sm:mt-6 mb-3 sm:mb-4">PLANS</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Pricing</a></li>
          <li><a href="#" class="hover:underline">Enterprise</a></li>
          <li><a href="#" class="hover:underline">Organization</a></li>
          <li><a href="#" class="hover:underline">Professional</a></li>
        </ul>
      </div>

      <!-- Use Cases -->
      <div>
        <h4 class="text-[12px] font-semibold text-gray-400 mb-3 sm:mb-4">USE CASES</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">UI design</a></li>
          <li><a href="#" class="hover:underline">UX design</a></li>
          <li><a href="#" class="hover:underline">Wireframing</a></li>
          <li><a href="#" class="hover:underline">Diagramming</a></li>
          <li><a href="#" class="hover:underline">Prototyping</a></li>
          <li><a href="#" class="hover:underline">Brainstorming</a></li>
          <li><a href="#" class="hover:underline">Presentation Maker</a></li>
          <li><a href="#" class="hover:underline">Online whiteboard</a></li>
          <li><a href="#" class="hover:underline">Strategic planning</a></li>
          <li><a href="#" class="hover:underline">Mind mapping</a></li>
          <li><a href="#" class="hover:underline">Concept map</a></li>
          <li><a href="#" class="hover:underline">AI app builder</a></li>
          <li><a href="#" class="hover:underline">AI website builder</a></li>
          <li><a href="#" class="hover:underline">AI wireframe generator</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h4 class="text-[12px] font-semibold text-gray-400 mb-3 sm:mb-4">RESOURCES</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Blog</a></li>
          <li><a href="#" class="hover:underline">Best practices</a></li>
          <li><a href="#" class="hover:underline">QR code generator</a></li>
          <li><a href="#" class="hover:underline">Color wheel</a></li>
          <li><a href="#" class="hover:underline">Colors</a></li>
          <li><a href="#" class="hover:underline">Color picker</a></li>
          <li><a href="#" class="hover:underline">Color palettes</a></li>
          <li><a href="#" class="hover:underline">Color palette generator</a></li>
          <li><a href="#" class="hover:underline">Color contrast checker</a></li>
          <li><a href="#" class="hover:underline">Font library</a></li>
          <li><a href="#" class="hover:underline">Lorem ipsum generator</a></li>
          <li><a href="#" class="hover:underline">Templates</a></li>
          <li><a href="#" class="hover:underline">Developers</a></li>
          <li><a href="#" class="hover:underline">Integrations</a></li>
          <li><a href="#" class="hover:underline">Affiliate program</a></li>
          <li><a href="#" class="hover:underline">Resource library</a></li>
          <li><a href="#" class="hover:underline">Reports and insights</a></li>
          <li><a href="#" class="hover:underline">Support</a></li>
          <li><a href="#" class="hover:underline">Status</a></li>
          <li><a href="#" class="hover:underline">Legal and privacy</a></li>
          <li><a href="#" class="hover:underline">Modern slavery statement (UK)</a></li>
          <li><a href="#" class="hover:underline">Climate disclosure statement</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h4 class="text-[12px] font-semibold text-gray-400 mb-3 sm:mb-4">COMPANY</h4>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Events</a></li>
          <li><a href="#" class="hover:underline">Customers</a></li>
          <li><a href="#" class="hover:underline">Careers</a></li>
          <li><a href="#" class="hover:underline">Newsroom</a></li>
          <li><a href="#" class="hover:underline">Investors</a></li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div class="mt-10 md:mt-12 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-[12px] text-gray-500">
      <a href="#">Cookie settings</a>
      <a href="#">English</a>
    </div>
  </footer>
</template>
