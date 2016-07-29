<?php
/*
 *
 * (c) Phuong Tran <tvpsoft@live.com>
 * @AlumnTest
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * Run command:
 * # phpunit TerrainLevelingTest
 *
 */

namespace Phuong\AlumnTest;


require "TerrainLeveling.php";

use PHPUnit\Framework\TestCase;

class TerrainLevelingTest extends TestCase
{

    /**
     * @covers            \Phuong\TerrainLeveling::getMinimun
     * @uses              \Phuong\TerrainLeveling
     */
    public function testGetMinimun()
    {
        // Test AlumnForce cases
        $this->assertEquals(2, TerrainLeveling::getMinimun(array("10","31")));
        $this->assertEquals(7, TerrainLeveling::getMinimun(array("54454","61551")));
        $this->assertEquals(0, TerrainLeveling::getMinimun(array("989")));
        $this->assertEquals(53, TerrainLeveling::getMinimun(array("5781252", "2471255", "0000291", "1212489")));
        // Test AlumnForce excepions
        $this->assertEquals(-1, TerrainLeveling::getMinimun(array()));
        $this->assertEquals(-1, TerrainLeveling::getMinimun(array("5781252","233")));
        $this->assertEquals(-1, TerrainLeveling::getMinimun(array("578a252","5781252")));
        $this->assertEquals(-1, TerrainLeveling::getMinimun(array("5781252","5781252","","123")));

    }

}
