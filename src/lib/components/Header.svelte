<script>
    import { onMount } from 'svelte'

    let postHero = false
    function fixNavbar(){
        if (window.scrollY>screen.height) {postHero = true}
        else {postHero=false}
        setTimeout(() => {fixNavbar()}, 20)
    }

    onMount(() => fixNavbar())

    let active = false
    function activate(){active = !active}
</script>

<nav id="navi" class="bg-blue-500">
    <div class="">
        <a href="/" class="">Eli B3 | Web Dev</a>
        <!-- <div class="">Test</div> -->
        <div 
            class=""
            on:click|stopPropagation={activate}
            on:pointerenter={activate}
            on:pointerleave={activate}
        >
        <!-- need new burger menu icon -->
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="">
        <div class="">
            <!-- <div class="">... pulsing dot bridge ...</div> -->
        </div>
        <div class="">
            <a href="#about" class="">About</a>
            <a href="#portfolio" class="">Portfolio</a>
            <a href="#contact" class="">Contact</a>
            <a href="#about" class="">Resume</a>
            <a href="#portfolio" class="">Github</a>
            <!-- <a href="#contact" class="">Blog (Coming Soon)</a> -->
        </div>
    </div>
</nav>