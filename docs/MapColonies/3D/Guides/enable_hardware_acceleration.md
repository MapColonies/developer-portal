---
id: enable-hardware-acc
slug: HardwareAcceleration
title: Enable Hardware Accelaration
description: How to enable hardware acceleration
tags:
  - 3D
  - dem
  - chrome
  - performance
  - guide
---

## What Is Hardware Acceleration?

If you enable hardware acceleration, or often times it’s enabled by default, the apps are allowed to use more of your device’s hardware to improve the overall performance of it. In the past, your computer’s processor was enough to handle most of the essential tasks of apps, especially web browsers. But as technology progresses, the requirements of minor web apps become bigger than before.

Some apps can’t work at their full potential if they only use your processor’s capacity. Take web browsers for example. Web sites are becoming more polished and demanding, so your browser may need to ‘borrow’ some power from your graphics and sound card to be more efficient. Google Chrome is one of those browsers.

The need for increased security when browsing the internet and greater video, sound, and streaming performance capabilities has caused many companies to build additional features into their web browsers. These features include running the browser and its tabs in containers, limiting and monitoring the actions a web page is trying to make, and more. As you can guess, this means increased demand for system resources such as the GPU for greater video quality.

## How to Check Hardware Acceleration in Chrome

Before you turn hardware acceleration on or off, you should check its status. To do this, you need to:

1. Open Google Chrome, type `“chrome://gpu”` in the address bar on the top, and then press Enter.

<figure>
    <img src={require("/img/hardware-acceleration/Chrome-Search-bar-chrome-gpu.webp").default} />
</figure>

1. After you execute the command, Chrome should display a list of various data about the software. For hardware acceleration, you should only pay attention to the Graphics Feature Status section.

   * Next to each parameter, you should see either Hardware accelerated, Software only. Hardware acceleration disabled, Disabled, or Unavailable.
   * If most of these items have a Hardware accelerated value displayed in green, it means that the feature is enabled. On the other hand, if Canvas, Flash, Compositing, WebGL, and others are disabled, you’ll need to turn hardware acceleration on.

<figure>
    <img src={require("/img/hardware-acceleration/graphics-feature-status.webp").default} />
</figure>



## Turning On Hardware Acceleration in Chrome
You can turn on hardware acceleration by following a few simple steps:

1. Click the **More** button (three vertical dots) on the top-right of your Chrome window and select **Settings** from the drop-down menu.

<figure>
    <img src={require("/img/hardware-acceleration/Chrome-Menu-Settings.webp").default} />
</figure>

2. Now, click the **Advanced** menu on the left-side and then click on **System**.

<figure>
    <img src={require("/img/hardware-acceleration/Chrome-System-Menu-2.webp").default} />
</figure>

3. Then, toggle on **Use hardware acceleration** when available under the System section.

<figure>
    <img src={require("/img/hardware-acceleration/use-hardware-acceleration-when-available.webp").default} />
</figure>

4. If Chrome notifies you that it needs to be restarted, just close all the tabs and relaunch it.

5. Now, to check that it’s working, type “chrome://gpu” in the address bar again and hit **Enter**.

6. Check if most of the items under the ‘Graphics Feature Status’ have the **Hardware accelerated** value.

To turn off hardware acceleration, just follow steps 1-3 and toggle the **Use hardware acceleration** when available option off.

Note that if the **Use hardware acceleration** when available option was already on when you entered the **Settings** and the values were disabled regardless, you will need to use another method.

:::danger
If it doesn't work, make sure all of your graphics drivers are up to date. And repeat the steps.
:::
