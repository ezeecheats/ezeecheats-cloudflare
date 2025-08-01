// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
    IconCalendarStats,
    IconDeviceDesktopAnalytics,
    IconFingerprint,
    IconGauge,
    IconHome2,
    IconDashboard,
    IconLogout,
    IconSettings,
    IconSwitchHorizontal,
    IconUser,
    IconFolder,
    IconMoon,
    IconSun,
    IconPalette,
    IconLogs,
    IconBan,
    IconKeyboard,
    IconPower,
    IconHome,
    IconReceipt2,
    IconHelp,
    IconStar,
    IconRobot,
    IconChevronDown,
    IconSwords,
    IconPick

} from '@tabler/icons-react';

import { useDisclosure } from '@mantine/hooks';
import { Divider, Center, Stack, Tooltip, Popover, Button, UnstyledButton, List, ListItem, Image, Select, Group, Box, Text, Menu } from '@mantine/core';
import { useTheme } from '../contexts/ThemeContext';

function NavbarLink({ icon: Icon, label, active, to }) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Text fw={400} className="footerLink"
            data-active={active || undefined}
            onClick={() => {
                navigate(to);
            }}
        >{label}</Text>
    );
}

const Navbar = () => {
    const [active, setActive] = useState('dashboard');
    const [saving, setSaving] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setActive('');
        else if (path === '/ezeerotation' || path === '/ezeescaping') setActive('products');
        else if (path === '/features') setActive('features');
        else if (path === '/pricing') setActive('pricing');
        else if (path === '/faq') setActive('faq');
        else setActive('');
    }, [location.pathname]);

    return (
        <div className="footer-horizontal">
            <Group className="footerHeader">
                <Text fw={400} className="footerText"
                >© 2025 EZeeCheats, Inc. All rights reserved.</Text>
            </Group>

            <Group className="footerMain" gap="lg">
                <NavbarLink icon={IconStar} label="Home" active={active === "features"} to="/features" />
                <NavbarLink icon={IconReceipt2} label="Support" active={active === "pricing"} to="/pricing" />
            </Group>

            <Group className="footerFooter">
                <Text fw={400} className="footerText"
                >© 2025 EZeeCheats, Inc. All rights reserved.</Text>
            </Group>
        </div>
    );
};

export default Navbar;
